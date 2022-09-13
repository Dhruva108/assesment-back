/* eslint-disable max-len */
const Router = require('express');
const {
  getAllUsersHandler,
  getSingleUserHandler,
  createUserHandler,
  deleteUserHandler,
  updateUserHandler,
} = require('./user.controller');
const { registerLogin } = require('./user.JoiSchema');

const router = Router();

/**
 * @openapi
 * /api/user:
 *  get:
 *   tags:
 *   - Users
 *   description: Get all users
 *   summary: Get all users
 *   responses:
 *     200:
 *      description: An array of users
 *      content:
 *       application/json:
 *        schema:
 *         type: array
 *         items:
 *          $ref: '#/components/schemas/userResponse'
 *     500:
 *      description: Internal server error
 *      content:
 *       application/json:
 *        schema:
 *         $ref: '#/components/schemas/error'
 */
router.get('/', getAllUsersHandler);
/**
 * @openapi
 * /api/user:
 *  post:
 *   tags:
 *   - Users
 *   description: Create a new user an return the user
 *   summary: Create a new user
 *   requestBody:
 *    required: true
 *    content:
 *     application/json:
 *      schema:
 *       type: object
 *       properties:
 *        name:
 *         type: string
 *         example: John
 *         description: The name of the user
 *         default: John Doe
 *        email:
 *         type: string
 *         example: jd@exmaple.com
 *        lastName:
 *         type: string
 *         example: Doe
 *         description: The last name of the user
 *         default: Doe
 *        password:
 *         type: string
 *         example: 12-*abCD
 *         description: The password of the user contain at least two number,
 *          two uppercase letter, two lowercase letter and two special character
 *         default: 12-*abCD
 *        userName:
 *         type: string
 *         example: jdoe
 *         description: The user name of the user
 *         default: jdoee
 *       required:
 *       - name
 *       - email
 *       - lastName
 *       - password
 *       - userName
 *   responses:
 *     201:
 *      description: A single user
 *      content:
 *       application/json:
 *        schema:
 *         $ref: '#/components/schemas/userResponse'
 *     500:
 *      description: Internal server error
 *      content:
 *       application/json:
 *        schema:
 *         $ref: '#/components/schemas/error'
 */
router.post('/', registerLogin, createUserHandler);
/**
 * @openapi
 * /api/user/{id}:
 *  get:
 *   tags:
 *   - User
 *   description: Get a single user
 *   summary: Get a single user by id
 *   parameters:
 *     - in: path
 *       name: id
 *       description: The id of the user
 *       required: true
 *   responses:
 *    200:
 *     description: The user found
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/userResponse'
 *    500:
 *     description: Internal server error
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/error'
 */
router.get('/:id', getSingleUserHandler);
/**
 * @openapi
 * /api/user/{id}:
 *  patch:
 *   tags:
 *   - Users
 *   description: Update a single user
 *   summary: Update a single user by id
 *   parameters:
 *    - in: path
 *      name: id
 *      description: The id of the user
 *      required: true
 *   requestBody:
 *    required: true
 *    content:
 *     application/json:
 *      schema:
 *       type: object
 *   responses:
 *    200:
 *     description: The user updated
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/userResponse'
 *    500:
 *     description: Internal server error
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/error'
 */
router.patch('/:id', updateUserHandler);
/**
 * @openapi
 * /api/user/{id}:
 *  delete:
 *   tags:
 *   - Users
 *   description: Delete a single user
 *   summary: Delete a single user by id
 *   parameters:
 *     - in: path
 *       name: id
 *       description: The id of the user
 *       required: true
 *   responses:
 *    200:
 *     description: The user deleted
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/userResponse'
 *    500:
 *     description: Internal server error
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/error'
 */
router.delete('/:id', deleteUserHandler);

module.exports = router;
