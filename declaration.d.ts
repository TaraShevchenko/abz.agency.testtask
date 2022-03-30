declare module '*.png';

declare module "*.svg" {
  import React = require('react');
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const icon: string;
  export default icon;
}

declare module '*.scss' {
  const style: Record<string, string>;
  export default style;
}

declare module 'constants' {
  export * from '@types/constants'
}
