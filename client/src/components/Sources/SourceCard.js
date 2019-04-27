import React from 'react';

import SourceButton from './SourceButton/SourceButton';
import SourceCreate from '../../containers/Sources/SourceCreate/SourceCreate';
import style from './SourceCard.module.scss';

class SourceCard extends React.Component {
  sourceDelete = () => {
    this.props.sourceDelete(this.props.source._id);
  };
  handleClick = id => {
    this.props.toggleEditSource(id);
  };
  render() {
    let showEdit = false;
    if (
      this.props.showEditSourceId === this.props.source._id &&
      this.props.showEdit
    )
      showEdit = true;
    return (
      <section className={style.sectionWrapper}>
        <div
          className={style.section}
          onClick={() => this.handleClick(this.props.source._id)}
        >
          <section className={style.nameWrapper}>
            <p onClick={this.goHome} className={style.name}>
              {this.props.source.name}
            </p>
            <p className={style.url}>{this.props.source.url}</p>
          </section>
          <section className={style.buttonsWrapper}>
            <SourceButton
              type="edit"
              toggleEditSource={this.props.toggleEditSource}
              sourceId={this.props.source._id}
            />
            <SourceButton type="delete" sourceDelete={this.sourceDelete} />
          </section>
        </div>
        {showEdit ? (
          <SourceCreate
            mode="Update"
            toggleEditSource={this.props.toggleEditSource}
            source={this.props.source}
            updateSource={this.props.updateSource}
          />
        ) : null}
      </section>
    );
  }
}

export default SourceCard;
