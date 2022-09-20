import React from 'react'
import ContentLoader from "react-content-loader";

function LoadingCart() {
  return (
    <div className="card">
      <ContentLoader 
        speed={2}
        width={315}
        height={475}
        viewBox="0 0 315 475"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <rect x="0" y="28" rx="0" ry="0" width="255" height="300" /> 
        <rect x="0" y="338" rx="0" ry="0" width="255" height="30" /> 
        <rect x="52" y="376" rx="0" ry="0" width="150" height="30" /> 
        <circle cx="72" cy="440" r="20" /> 
        <circle cx="185" cy="440" r="20" /> 
        <rect x="102" y="422" rx="0" ry="0" width="50" height="40" />
      </ContentLoader>
    </div>
  )
}

export default LoadingCart