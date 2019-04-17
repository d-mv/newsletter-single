import React from 'react';

import PostTitle from '../PostTitle/PostTitle';
import PostButton from './PostButton/PostButton';
import Source from '../Source/Source';
import DateTime from '../DateTime';
import ApproxVolume from '../ApproxVolume';
import style from './PostCard.module.scss';

class PostCard extends React.Component {
  handleClick = func => {
    func(this.props.post._id);
  };

  handleAction = props => {
    this.props.selector[1]({
      action: 'update',
      field: props,
      value: !this.props.post[`${props}`],
      postId: this.props.post._id
    });
  };
  render() {
    const text = `${this.props.post.text.replace(/<(?:.|\n)*?>/gm, ' ')}...`;
    let bodyClass = style.body;

    if (this.props.post.read) {
      bodyClass = style.bodyRead;
    }

    return (
      <section className={bodyClass} key={this.props.post._id}>
        <PostTitle
          mode="card"
          titleClick={this.handleClick.bind(this, this.props.selector[0])}
          postTitle={this.props.post.title}
        />
        <section className={style.secondLine}>
          <Source mode="card" source={this.props.post.source} />
          <div className={style.buttonsWrapper}>
            <PostButton
              type="star"
              value={this.props.post.star}
              action={this.handleAction}
            />
            <PostButton
              type="read"
              value={this.props.post.read}
              action={this.handleAction}
            />
          </div>
        </section>
        <section
          className={style.text}
          onClick={this.handleClick}
          dangerouslySetInnerHTML={{ __html: text }}
        />
        <footer>
          <DateTime timestamp={new Date(this.props.post.published)} />
          <ApproxVolume
            volume={this.props.post.readTime}
            units="mins"
            mode="card"
          />
        </footer>
      </section>
    );
  }
}

export default PostCard;
