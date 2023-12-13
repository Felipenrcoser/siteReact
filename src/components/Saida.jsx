import React from 'react'
import BaixaEstoque from '../tables/saidaBaixa'

const Saida = () => {
  return (
      <div className="saida">
          <h1>Saida</h1>
          <p>Tela de baixa de materiais</p>
          <BaixaEstoque />
      </div>
  )
}

export default Saida