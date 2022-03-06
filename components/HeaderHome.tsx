import HeaderContainer from './containers/HeaderContainer';

const HeaderHome = () => {
  return (
    <HeaderContainer>
      <div>
        <h1 className="text-lg">
          History of <span className="line-through">Conflicts</span>
        </h1>
        <p>There are wisdoms on every conflicts.</p>
      </div>
      <div>
        <p className="italic">Spread love, not war.</p>
      </div>
    </HeaderContainer>
  );
};

export default HeaderHome;
