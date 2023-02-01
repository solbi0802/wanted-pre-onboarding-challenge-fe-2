/**
 * @author sb-shin
 * @version 1.0
 */

/**
 * @class
 * @property {number} id                       - 아이디(required)
 * @property {string} content                  - 내용(required)
 * @property {boolean} isCompleted                  - 완료여부(required)
 * @property {string} category                 - 카테고리(required)
 * @property {Tag} [tags]     - 태그들(optional)
 */
class Todo {}

/**
 * @class
 * @property {number} id - 아이디
 * @property {string} value - 태그명
 */

class Tag {}

/**
 * Create Todo
 * @function createTodo
 * @param {string}  content
 * @param {boolean}  isCompleted
 * @param {string}  category
 * @param {Tag} [tags]
 * @return {object} {id: 1, content: '리액트앱 개발', ..}
 */

const createTodo = (content, isCompleted, category, tags) => {};

/**
 * Read All TodoList
 * @function getAllList
 * @return {object} {id: 1, content: '리액트앱 개발', ..}
 */

const getAllList = () => {};

/**
 * Read Todo(id)
 * @function getTodoById
 * @param {number}  id
 * @return {object} {id: 1, content: '리액트앱 개발', ..}
 */

const getTodoById = (id) => {};

/**
 * update Todo
 * @function updateTodo
 * @param {number}  id
 * @param {Todo} todo
 * @return {object} {id: 1, content: '리액트앱 개발', ..}
 */

const updateTodo = (id, todo) => {};

/**
 * update Tag
 * @function updateTodo
 * @param {number}  id
 * @param {number} tagId
 * @return {object} {id: 1, value: '태그1'}
 */

const updateTag = (id, tagId) => {};

/**
 * Delete Todo
 * @function deleteTodo
 * @param {number}  [id]
 * @return {object} {id: 1, content: '리액트앱 개발', ..}
 */

const deleteTodo = (id) => {};

/**
 * Delete Tag
 * @function deleteTag
 * @param {number}  [id]
 * @param {number}  [tagId]
 * @return {object} {id: 1, content: '리액트앱 개발', ..}
 */

const deleteTag = (id, tagId) => {};
