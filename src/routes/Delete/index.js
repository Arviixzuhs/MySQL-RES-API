import { Router } from 'express'
import { pool } from '../../db/dbConnection.js'

const router = Router()

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const [rows] = await pool.query('DELETE FROM employee WHERE id = ?', [id])

    if (rows.affectedRows <= 0) {
      return res.status(404).json({ message: 'Employee not found' })
    }

    res.sendStatus(204)
  } catch (error) {
    return res.status(500).json({ message: 'Something goes wrong' })
  }
})

export default router
