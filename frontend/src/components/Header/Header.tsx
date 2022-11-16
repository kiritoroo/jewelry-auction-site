import Marquee from 'react-fast-marquee'
import * as S from './Header.styled'

export const Header = () => {
  
  return (
    <>
      <S.Header>
        <S.LogoWrapper>
          <img src='/icon-diamond.png'/>
        </S.LogoWrapper>
        <S.MarqueeWrapper>
          <Marquee speed={80} gradient={false}>
            Best auction site for you!
          </Marquee>
        </S.MarqueeWrapper>
        <S.BrandWrapper>
          <h1>Yabe Auction Site</h1>
        </S.BrandWrapper>
        <S.Grid>
          <div>
            <a href='#'>Home</a>
          </div>
          <div>
            <a href='#'>About</a>
          </div>
          <div>
            <a href='#'>Contact</a>
          </div>
          <div>
            <a href='#'>Account</a>
          </div>
        </S.Grid>
      </S.Header>
    </>
  )
}