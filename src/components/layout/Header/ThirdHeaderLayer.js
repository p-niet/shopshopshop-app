export const ThirdHeaderLayer = ({
  secondLevelCategoryData,
  thirdLevelCategoryDataLeft,
  thirdLevelCategoryDataMiddle,
  thirdLevelCategoryDataRight,
}) => {
  return (
    <div className="megamenu">
      <div className="left">
        <div className="third-top">{secondLevelCategoryData.left.name}</div>
        <div className="third-mid">
          {thirdLevelCategoryDataLeft.map((thirdCategory, idx) => {
            const { name, links } = thirdCategory;

            return (
              <li key={idx}>
                <a href={links}>{name}</a>
              </li>
            );
          })}
        </div>
      </div>
      <div className="middle">
        <div className="third-top">{secondLevelCategoryData.middle.name}</div>
        <div className="third-mid">
          {thirdLevelCategoryDataMiddle.map((text, href) => {
            const { name } = text;
            const { links } = href;

            return (
              <li key={name}>
                <a href={links}>{name}</a>
              </li>
            );
          })}
        </div>
      </div>
      <div className="right">
        <div className="third-top">{secondLevelCategoryData.right.name}</div>
        <div className="third-mid">
          <img
            src={thirdLevelCategoryDataRight.imgSrc}
            alt={thirdLevelCategoryDataRight.text}
            href={thirdLevelCategoryDataRight.href}
          />
        </div>
        <div className="third-btm">
          <p>
            <a href={thirdLevelCategoryDataRight.href}>
              {thirdLevelCategoryDataRight.text}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
