import { handleError, Get } from '@/Services'

export default async (userId) => {
  if (!userId) {
    return handleError({ message: 'User ID is required' })
  }
  const { response } = await Get(`users/${userId}`)

  return response.data
}
