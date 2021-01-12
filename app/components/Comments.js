import React from 'react';
import PropTypes from 'prop-types';
import PostsMetaInfo from './PostMetaInfo'

export default function Comment ({ comment }) {
  return (
    <div className="comment">
      <PostsMetaInfo
        comment={true}
        by={comment.by}
        time={comment.time}
        id={comment.id}
      />
      <p dangerouslySetInnerHTML={{__html: comment.text}} />
    </div>
  )
}


Comment.propTypes = {
  comment: PropTypes.object
}