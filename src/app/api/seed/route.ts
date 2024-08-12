import prisma from '@/lib/prisma/prisma-client'
import { NextResponse } from 'next/server'

export async function GET() {

  await prisma.todo.deleteMany()

  const res = await prisma.todo.createMany({
    data: [
      { description: 'Tarea 1' },
      { description: 'Tarea 2' },
      { description: 'Tarea 3', completed: true },
      { description: 'Tarea 4' },
      { description: 'Tarea 5', completed: true },
      { description: 'Tarea 6' },
      { description: 'Tarea 7', completed: true }
    ]
  })
  console.log(res)

  return NextResponse.json({
    message: 'Seed ejecutada'
  })
}