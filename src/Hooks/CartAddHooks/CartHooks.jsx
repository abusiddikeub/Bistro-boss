import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react'
import { AuthContext } from '../../Routers/AuthProvider'


const useCart = () =>{
               const {user} = useContext(AuthContext);
        //        jwt token -----

        // const token = localStorage.getItem('access-token')

// akana data : cart = [] avabe nawar mane hosche cart akara data gulo pass hba 
               const { refetch, data:cart = [] } = useQuery({
                              queryKey: ['carts',user?.email],
                              queryFn: async()=>{
                      const res = await fetch(`http://localhost:5000/carts?email=${user?.email}`,)
                      return res.json()
                      
                              },

                            })
// cart hisabe sai data gulo pass hba ----- cart and isLoading dependenche hisabe 
                            return [cart,refetch]
                          
}

export default useCart;