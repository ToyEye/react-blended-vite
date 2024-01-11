import style from './Text.module.css';

export const Text = ({ children, textAline = 'text', marginBottom = '0' }) => {
  console.log(
    [style[textAline], style[`marginBottom${marginBottom}`]].join(' '),
  );
  return (
    <p
      className={[style[textAline], style[`marginBottom${marginBottom}`]].join(
        ' ',
      )}
    >
      {children}
    </p>
  );
};