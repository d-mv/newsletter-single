import React from 'react';

import PostTitle from '../PostTitle/PostTitle';
import Source from '../Source/Source';
import PostButton from '../../containers/Posts/PostButton/PostButton';
import DateTime from '../DateTime';
import ApproxVolume from '../ApproxVolume';
import Divider from '../Divider/Divider';
import style from './PostShow.module.scss';

class PostShow extends React.Component {
  handleClick = () => {
    window.open(this.props.post.url, '_blank');
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
          titleClick={this.handleClick}
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
              value={this.props.post.star}
              postId={this.props.post._id}
            />
            <PostButton
              type="delete"
              postId={this.props.post._id}
              toggle={this.props.toggle}
            />
          </div>
        </div>
        <section
          className={style.text}
          dangerouslySetInnerHTML={{
            __html: this.props.post.text
          }}
        />
        <Divider />
        <footer className={style.statusLine}>
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
          <ApproxVolume volume={this.props.post.pages} units="pages" />
        </footer>
      </article>
    );
  }
}

export default PostShow;
