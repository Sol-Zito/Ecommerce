import React from 'react'

const FormUpdateProduct = ({handleSubmit, handleChange}) => {
  return (
    <div>
      <form
        action=""
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "5px" }}
      >
        <input
          type="text"
          name="name"
          placeholder="nombre del producto"
          onChange={handleChange}
        />
        <input
          type="text"
          name="price"
          placeholder="precio del producto"
          onChange={handleChange}
        />
        <input
          type="text"
          name="stock"
          placeholder="stock del producto"
          onChange={handleChange}
        />
        <input
          type="text"
          name="description"
          placeholder="description del producto"
          onChange={handleChange}
        />
        <input
          type="text"
          name="category"
          placeholder="category del producto"
          onChange={handleChange}
        />
        <input
          type="text"
          name="img"
          placeholder="img del producto"
          onChange={handleChange}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  )
}

export default FormUpdateProduct
