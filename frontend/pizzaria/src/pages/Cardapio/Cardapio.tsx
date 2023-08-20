import axios from "axios"
import { useEffect, useState } from "react"
import { PedidoType } from "../../shared/types/pedidoType"

export const Cardapio = () => {

    const [data, setData] = useState<PedidoType[]>([])
    useEffect(() => {
      axios.get('http://localhost:8080/pedido')
      .then((result) => {
        return setData(result.data)
      })

    }, [])
    console.log(data);
    
  return (

    <div>
      {data.map((pedido) => (
        <div key={pedido.id}>
          <p>
            {pedido.nome}
          </p>
          <p>
            {pedido.quantidade}
          </p>
          <p>
            {pedido.preco}
          </p>
        </div>
      )

      )}
    </div>

  )
}