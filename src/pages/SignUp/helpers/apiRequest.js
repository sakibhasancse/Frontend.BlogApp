import axios from 'axios'
import { getApiBaseUrl } from '@/utils'

const API_URL = getApiBaseUrl();

export const signUpRequest = async (formData) => {
  try {
    const response = await axios({
      method: 'POST',
      url: `${API_URL}/auth/signup`,
      data: formData
    })

    return response;
  } catch (error) {
    return { error: error?.message ? error.message : 'Internal Server Error' }
  }
}