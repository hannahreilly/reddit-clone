import React from 'react'

const CreatePost = (props) => {
  return (
    <form
      onSubmit={props.postSubmit}
      className="post-form"
    >
    <input 
      type="text"
      name="title"
      value={props.title}
      placeholder="Title"
      onChange={props.onContentChange}
      />
    <textarea
      type="textarea"
      name="content"
      value={props.content}
      placeholder="Post It"
      onChange={props.onContentChange}
      rows="4"
    />
    <input
      type="submit"
      value="Post" 
    />
  </form>
  )
}

export default CreatePost;