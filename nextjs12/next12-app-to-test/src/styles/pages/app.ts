import { styled } from "..";

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'start',
  minHeight: '100vh',
})

export const Header = styled('header', {
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'space-between',
})

export const CartButton = styled('button', {
  width: '48px',
  height: '48px',
  border: '0',
  backgroundColor: '$gray800',
  borderRadius: '6px',
  padding: '12px',
  marginRight: '20px',
})

export const CloseButton = styled('button', {
  width: '24px',
  height: '24px',
  position: 'absolute',
  border: '0',
  top: '40px',
  right: '40px',
  zIndex: '999',
  color: '$gray700',
  backgroundColor: 'transparent',
  cursor: 'pointer',
})

export const CartModalContainer = styled('div', {
  backgroundColor: '$gray800',
  display: 'flex',
  width: '30rem',
  position: 'absolute',
  right: 0,
  height: '100vh',
  zIndex: '99',
  transform: 'translate(0, 0)',
})