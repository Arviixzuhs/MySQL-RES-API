import { Router } from 'express'
import { pool } from '../../db/dbConnection.js'

const router = Router()

router.post('/', async (req, res) => {
  try {
    const { name, salary } = req.body
    const [rows] = await pool.query('INSERT INTO employee (name, salary) VALUES (?, ?)', [
      name,
      salary,
    ])
    res.status(201).json({ id: rows.insertId, name, salary })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: 'Something goes wrong' })
  }
})

export default router
