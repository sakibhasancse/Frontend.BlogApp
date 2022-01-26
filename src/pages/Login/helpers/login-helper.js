import axios from 'axios'
import { getApiBaseUrl } from '@/utils'



export const loginRequest = async (formData) => {
  try {
    const response = await axios({
      method: 'POST',
      url: `${API_URL}/auth`,
      data: formData
    })

    return response;
  } catch (error) {
    return { error: error?.message ? error.message : 'Internal Server Error' }
  }
}

export const login = () => {
  
}
