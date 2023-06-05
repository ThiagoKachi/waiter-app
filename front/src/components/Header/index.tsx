import LogoImg from '../../assets/images/logo.svg';

import * as S from './styles';

export function Header() {
  return (
    <S.Container>
      <S.Content>

        <div className='page-details'>
          <h1>Pedidos</h1>
          <h2>Acompanho o pedido dos clientes</h2>
        </div>

        <img src={LogoImg} alt="WaiterApp" />
      </S.Content>
    </S.Container>
  );
}
