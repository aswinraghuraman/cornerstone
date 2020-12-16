import React from 'react';
const filterOptionValues = (option_values) => {
    const nameValues = option_values.map((option, index) => {
        return <p key={index}><strong>{option.option_display_name}</strong>: {option.label}</p>
    })
    return nameValues;
}
const bulkVariantRows = (props) => {
    const variants = props.variants;
    const variantRows = variants.map((variant, index) => {
        return (
            <div key={index} className='bulk-variant-row'>
                    <div className='bulk-variant-col'><img src={variant.image_url}/></div>
                    <div className='bulk-variant-col'>{filterOptionValues(variant.option_values)}</div>
                    <div className='bulk-variant-col'>${parseFloat(variant.calculated_price).toPrecision(4)}</div>
                    <div className='bulk-variant-col'>{variant.sku}</div>
                    <div className='bulk-variant-col'>
                        <input
                          type='number'
                          min='0'
                          placeholder='0'
                          className='qtyField'
                          onChange={(e) => props.changeQty(variant.id, e.target.value)}
                        />
                    </div>
            </div>
        )
    })
    return variantRows;
}
export default bulkVariantRows;