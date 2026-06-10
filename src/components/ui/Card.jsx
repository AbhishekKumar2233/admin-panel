export default function Card({
  children,
  title,
  subtitle,
  footer,
  className = "",
  hover = true,
}) {
  return (
    <div
      className={`
        bg-white/5 border border-white/10
        backdrop-blur-xl rounded-2xl
        p-5 shadow-lg
        transition-all duration-300
        ${hover ? "hover:bg-white/10 hover:-translate-y-1 hover:shadow-xl" : ""}
        ${className}
      `}
    >
      {/* Header */}
      {(title || subtitle) && (
        <div className="mb-4">
          {title && (
            <h3 className="text-base font-semibold text-white">
              {title}
            </h3>
          )}

          {subtitle && (
            <p className="text-xs text-gray-400 mt-1">
              {subtitle}
            </p>
          )}
        </div>
      )}

      {/* Content */}
      <div>{children}</div>

      {/* Footer */}
      {footer && (
        <div className="mt-4 pt-4 border-t border-white/10 text-xs text-gray-400">
          {footer}
        </div>
      )}
    </div>
  );
}