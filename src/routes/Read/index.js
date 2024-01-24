import { Router } from 'express'
import { pool } from '../../db/dbConnection.js'

const router = Router()

router.get('/all', async (req, res) => {
  try {
    const [result] = await pool.query('SELECT * FROM employee')
    res.status(200).json(result)
  } catch (error) {
    console.log(error)
  }
})

router.get('/user/:id', async (req, res) => {
  try {
    const { id } = req.params
    const [rows] = await pool.query('SELECT * FROM employee WHERE id = ?', [id])

    if (rows.length <= 0) {
      return res.status(404).json({ message: 'Employee not found' })
    }

    res.json(rows[0])
  } catch (error) {
    console.log(error)
  }
})

export default router
