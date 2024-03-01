import { Hono } from 'hono'

const app = new Hono()

app.post('/', async(c) => {
  const data=await c.req.json()
  console.log(c.req.header("Authorization"))
  console.log(data)
  return c.text('Hello Hono!') 
})

export default app
