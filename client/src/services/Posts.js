import api from './apiConfig';

export const getPosts = async ()=>{
  try {
    const response = await api.get('/posts')
    return response.data
  } catch (error) {
    console.error(error)
  }
}

export const getPost = async id =>{
  try {
    const response = await api.get(`/posts/${id}`)
    return response.data

  } catch (error) {
    console.error(error)
  }
}

export const createPost = async post =>{
  try {
    const response = await api.post('/posts', post)
    return response.data

  } catch (error) {
    console.error(error)
  }
}

export const editPost = async (id, post) =>{
  try {
    const response = await api.put(`/posts/${id}`, post)
    return response.data

  } catch (error) {
    console.error(error)
  }
}

export const deletePost = async (id) =>{
  try {
    const response = await api.delete(`/posts/${id}`)
    return response.data

  } catch (error) {
    console.error(error)
  }
}
