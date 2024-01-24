import { Router } from 'express'
import { pool } from '../../db/dbConnection.js'

const router = Router()

router.post('/', async (req, res) => {
  try {
    const { name, salary, id } = req.body

    const [result] = await pool.query(
      'UPDATE employee SET name = IFNULL(?, name), salary = IFNULL(?, salary) WHERE id = ?',
      [name, salary, id]
    )

    if (result.affectedRows === 0) return res.status(404).json({ message: 'Employee not found' })

    const [rows] = await pool.query('SELECT * FROM employee WHERE id = ?', [id])

    res.json(rows[0])
  } catch (error) {
    return res.status(500).json({ message: 'Something goes wrong' })
  }
})

export default router
