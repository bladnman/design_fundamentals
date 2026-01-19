export default function RepetitionDemo({ styles = {} }) {
  const {
    consistentSpacing = true,
    consistentSizing = true,
    consistentColors = true,
    consistentBorders = true,
    itemCount = 4,
  } = styles

  const products = [
    { name: 'Wireless Earbuds', price: '$79', rating: '4.8' },
    { name: 'Smart Watch', price: '$199', rating: '4.6' },
    { name: 'Laptop Stand', price: '$45', rating: '4.9' },
    { name: 'USB-C Hub', price: '$35', rating: '4.7' },
    { name: 'Desk Lamp', price: '$55', rating: '4.5' },
    { name: 'Mouse Pad', price: '$25', rating: '4.8' },
  ].slice(0, itemCount)

  // Inconsistent variations
  const randomSpacing = ['p-3', 'p-5', 'p-4', 'p-6', 'p-2', 'p-5']
  const randomSizing = ['text-sm', 'text-base', 'text-lg', 'text-sm', 'text-base', 'text-lg']
  const randomColors = ['bg-slate-50', 'bg-blue-50', 'bg-amber-50', 'bg-emerald-50', 'bg-rose-50', 'bg-purple-50']
  const randomBorders = ['border-slate-200', 'border-blue-300', 'border-transparent', 'border-slate-300', 'border-amber-200', 'border-emerald-200']
  const randomBorderWidths = ['border', 'border-2', 'border', 'border-0', 'border', 'border-2']

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-xl demo-transition">
      <h3 className="text-lg font-semibold text-slate-900 mb-4">Featured Products</h3>

      <div className="grid grid-cols-2 gap-3">
        {products.map((product, i) => {
          const padding = consistentSpacing ? 'p-4' : randomSpacing[i]
          const textSize = consistentSizing ? 'text-base' : randomSizing[i]
          const bgColor = consistentColors ? 'bg-slate-50' : randomColors[i]
          const borderColor = consistentBorders ? 'border-slate-200' : randomBorders[i]
          const borderWidth = consistentBorders ? 'border' : randomBorderWidths[i]

          return (
            <div
              key={product.name}
              className={`
                ${bgColor} ${borderWidth} ${borderColor}
                ${padding} rounded-lg demo-transition
              `}
            >
              {/* Product image placeholder */}
              <div className={`
                ${consistentSizing ? 'h-16' : `h-${12 + (i % 3) * 4}`}
                ${consistentColors ? 'bg-slate-200' : randomColors[(i + 2) % randomColors.length]}
                rounded mb-3 demo-transition
              `} />

              <div className={`font-medium text-slate-900 ${textSize} demo-transition`}>
                {product.name}
              </div>

              <div className="flex justify-between items-center mt-2">
                <span className={`
                  font-semibold text-blue-600
                  ${consistentSizing ? 'text-base' : randomSizing[(i + 1) % randomSizing.length]}
                  demo-transition
                `}>
                  {product.price}
                </span>
                <span className={`
                  text-slate-500
                  ${consistentSizing ? 'text-sm' : randomSizing[(i + 2) % randomSizing.length]}
                  demo-transition
                `}>
                  ★ {product.rating}
                </span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
