import Marquee from 'react-fast-marquee'
import * as S from './Header.styled'

export const Header = () => {
  
  return (
    <>
      <S.Header>
        <S.BrandWrapper>
          <h1>Yabe Auction Site</h1>
        </S.BrandWrapper>
        <S.MarqueeWrapper>
          <Marquee speed={100} gradient={false}>
            Best auction site for you!
          </Marquee>
        </S.MarqueeWrapper>
        <S.LogoWrapper>
          <img src='/icon-diamond.png'/>
        </S.LogoWrapper>
      </S.Header>
    </>
  )
}