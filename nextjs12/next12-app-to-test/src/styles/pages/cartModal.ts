import { styled } from "..";

export const CartModalContainer = styled('div', {
  display: 'flex',
  backgroundColor: '$gray800',
  flexDirection: 'column',
  justifyContent: 'space-between',
  width: '30rem',
  position: 'absolute',
  right: 0,
  padding: '48px',
  height: '100%',
  minHeight: 'max-content',
  zIndex: '99',
  transform: 'translate(0, 0)',

  h2: {
    color: '$gray100',
    fontSize: 20,
    marginBottom: '32px',
  },
})

export const CheckoutButton = styled('button', {
  backgroundColor: '$green500',
  border: 0,
  color: '$white',
  borderRadius: 8,
  padding: '1.25rem',
  cursor: 'pointer',
  fontWeight: 'bold',
  fontSize: '$md',
  width: '100%',

  '&:disabled': {
    opacity: 0.6,
    cursor: 'not-allowed',
  },
  
  '&:not(:disabled):hover': {
    backgroundColor: '$green300',
  }
})

export const CloseButton = styled('button', {
  width: '24px',
  height: '24px',
  position: 'absolute',
  border: '0',
  top: '40px',
  right: '40px',
  zIndex: '999',
  backgroundColor: 'transparent',
  cursor: 'pointer',
})

export const CartProductInfo = styled('div', {
  marginTop: '30px',
  marginBottom: '30px',
  alignSelf: 'flex-end',
})

export const Qtd = styled('p', {
  display: 'flex',
  justifyContent: 'space-between',

  span: {
    
  }
})

export const Total = styled('p', {
  display: 'flex',
  justifyContent: 'space-between',
})

export const CartEntryContainer = styled('div', {
  display: 'flex',
  marginBottom: '24px',
})

export const CartEntryImage = styled('div', {
  borderRadius: 8,
  width: '100px',
  height: '100px',
  border: '1px solid black',
  marginRight: '24px',
  background: 'linear-gradient(180deg, #1EA483 0%, #7465D4 100%)',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
})

export const CartEntryText = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

  h3: {
    color: '$gray300',
    fontSize: 18,
    fontWeight: 'normal',
  },
  p: {
    color: '$gray100',
    fontSize: 18,
    fontWeight: 'bold',
  },
  button: {
    textAlign: 'left',
    border: 'none',
    background: 'none',
    fontSize: 16,
    padding: 0,
    color: '$green300',
    margin: 0,
    cursor: 'pointer',
    
    '&:not(:disabled):hover': {
      textDecoration: 'underline',
    }
  },
})
