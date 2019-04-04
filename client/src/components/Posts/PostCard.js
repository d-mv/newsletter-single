import React from 'react';

import PostTitle from '../PostTitle/PostTitle';
import PostButton from '../../containers/Posts/PostButton/PostButton';
import Source from '../Source/Source';
import DateTime from '../DateTime';
import ApproxVolume from '../ApproxVolume';
import style from './PostCard.module.scss';

class PostCard extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }
  handleClick = () => {
    this.props.selector(this.props.post._id);
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
          titleClick={this.handleClick}
          postTitle={this.props.post.title}
        />
        <section className={style.secondLine}>
          <Source mode="card" source={this.props.post.source} />
          <div className={style.buttonsWrapper}>
            <PostButton
              type="star"
              value={this.props.post.star}
              postId={this.props.post._id}
            />
            <PostButton
              type="read"
              value={this.props.post.read}
              postId={this.props.post._id}
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
