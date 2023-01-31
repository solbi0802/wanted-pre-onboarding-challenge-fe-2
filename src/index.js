/**
 * @author sb-shin
 * @version 1.0
 */

/**
 * TOdo Modeling
 * @typeof {object} Todo
 * @property {number} id - 아이디
 * @property {string} content - 내용
 * @property {boolean} isCompleted - 완료여부
 * @property {string} category - 카테고리
 * @property {Array<string>} tags - 태그들
 */

/**
 * Create Todo
 * @function createTodo
 * @param {string}  content
 * @param {boolean}  isCompleted
 * @param {string}  category
 * @param {Array<string>} [tags]
 * @return {object} {id, content, ..}
 */

const createTodo = (content, isCompleted, category, tags) => {};

/**
 * Read All TodoList
 * @function getAllList
 * @return {object} {id, content, ..}
 */

const getAllList = () => {};

/**
 * Read Todo(id)
 * @function getById
 * @param {number}  id
 * @return {object} {id, content, ..}
 */

const getById = (id) => {};

/**
 * update Todo
 * @function updateTodo
 * @param {string}  content
 * @param {boolean}  isCompleted
 * @param {string}  category
 * @param {Array<string>} [tags]
 * @return {object} {id, content, ..}
 */

const updateTodo = (content, isCompleted, category, tags) => {};

/**
 * update Todo By Id
 * @function updateTodoById
 * @param {number}  id
 * @param {Array<string>} [tags]
 * @return {object} {id, content, ..}
 */

const updateTodoById = (id, tags) => {};

/**
 * Delete All Todo
 * @function deleteAllTodo
 * @param {number}  id
 * @return {object} {id, content, ..}
 */

const deleteAllTodo = () => {};

/**
 * Delete Todo By Id
 * @function deleteTodoById
 * @param {number}  id
 * @return {object} {id, content, ..}
 */

const deleteTodoById = (id) => {};

/**
 * Delete All Tags
 * @function deleteAllTags
 * @return {object} {id, content, ..}
 */

const deleteAllTags = () => {};

/**
 * Delete Tags By Id
 * @function deleteTagsById
 * @param {number} id
 * @return {object} {id, content, ..}
 */

const deleteTagsById = (id) => {};
