import type { RenderIconProps } from '../types';
import { CheckedIcon, UncheckedIcon } from '../components';

const getIcon = (checked: boolean) => (checked ? CheckedIcon : UncheckedIcon);

const renderIconDefault = <T,>({ checked }: RenderIconProps<T>) => {
  const Icon = getIcon(checked);

  return <Icon className="e-radio__icon" />;
};

export default renderIconDefault;
