import React from 'react';

import PostTitle from '../../components/PostTitle/PostTitle';
import Source from '../../components/Source/Source';
import PostButton from '../../components/Posts/PostButton/PostButton';
import DateTime from '../../components/DateTime';
import ApproxVolume from '../../components/ApproxVolume';
import Divider from '../../components/Divider/Divider';

import style from './PostShow.module.scss';

class PostShow extends React.Component {
  state = {
    star: this.props.post.star,
    height: 0
  };

  handleClick = () => {
    window.open(this.props.post.url, '_blank');
  };

  handleAction = props => {
    if (props === 'star') {
      this.setState({ star: !this.state.star });
    }
    const request = {
      action: 'update',
      field: props,
      value: !this.props.post[`${props}`],
      postId: this.props.post._id,
      module: 'show'
    };

    if (props === 'delete') {
      request.action = 'delete';
    }
    this.props.updatePost(request);
  };

  componentDidMount = () => {
    window.scrollTo(0, 0);
  };

  render() {
    let author = '';
    if (!this.props.post.author) {
      author = '';
    } else {
      author = `by ${this.props.post.author}`;
    }
    return (
      <article className={style.body}>
        <PostTitle
          mode="show"
          selector={this.handleClick}
          postTitle={this.props.post.title}
        />
        <div className={style.secondLine}>
          <div className={style.sourceAuthorWrapper}>
            <div className={style.author}>{author}</div>
            <Source mode="show" source={this.props.post.source} />
          </div>
          <div className={style.buttonsWrapper}>
            <PostButton
              type="star"
              value={this.state.star}
              postId={this.props.post._id}
              action={this.handleAction}
            />
            <PostButton
              type="delete"
              postId={this.props.post._id}
              action={this.handleAction}
            />
          </div>
        </div>
        <section
          ref={divElement => (this.divElement = divElement)}
          className={style.text}
          dangerouslySetInnerHTML={{
            __html: this.props.post.text
          }}
        />
        <footer>
          <Divider />
          <div className={style.statusLine}>
            <DateTime
              pre="published:"
              timestamp={new Date(this.props.post.published)}
              mode="show"
            />
            <DateTime
              pre="parsed:"
              timestamp={new Date(this.props.post.parsed)}
              mode="show"
            />
            <div>
              <ApproxVolume volume={this.props.post.pages} units="pages" />
            </div>
          </div>
        </footer>
      </article>
    );
  }
}

export default PostShow;
