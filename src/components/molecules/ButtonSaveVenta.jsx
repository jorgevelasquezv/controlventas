import React from 'react'

export const ButtonSaveVenta = ({handleOnClickSaveSale}) => {
  return (
      <article className="d-grid gap-2 col-6 mx-auto">
          <button
              type="submit"
              className="btn btn-primary"
              onClick={handleOnClickSaveSale}
          >
              Guardar
          </button>
      </article>
  );
}
