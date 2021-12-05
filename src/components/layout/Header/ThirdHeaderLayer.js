import { Link } from "react-router-dom";

export const ThirdHeaderLayer = ({
  secondLevelCategoryData,
  thirdLevelCategoryDataLeft,
  thirdLevelCategoryDataMiddle,
  thirdLevelCategoryDataRight,
  type,
  typedProducts,
  lang,
  secondLevelCategorySelected,
}) => {
  const designersMapped = typedProducts.map((obj, idx) => obj.brand);
  const designers = designersMapped.filter(
    (brand, idx) => designersMapped.indexOf(brand) === idx
  );

  const clothingMapped = typedProducts.map((obj, idx) => obj.model);
  const clothing = clothingMapped.filter(
    (model, idx) => clothingMapped.indexOf(model) === idx
  );

  const topDesigners = {};
  designersMapped.forEach(
    (brand) => (topDesigners[brand] = (topDesigners[brand] || 0) + 1)
  );

  const sortedDesigners = Object.keys(topDesigners).sort(
    (a, b) => topDesigners[b] - topDesigners[a]
  );
  sortedDesigners.length = 5;

  return (
    <div className="megamenu">
      <div className="left">
        <div className="third-top">{secondLevelCategoryData.left.name}</div>
        {secondLevelCategorySelected === 0 && (
          <div className="third-mid">
            {designers.map((obj, idx) => {
              return (
                <Link to={`/${lang.isoCode}/brand/${obj}`} id="link-third">
                  <li key={idx}>{obj}</li>
                </Link>
              );
            })}
          </div>
        )}
        {secondLevelCategorySelected === 1 && (
          <div className="third-mid">
            {clothing.map((obj, idx) => {
              return (
                <Link to={`/${lang.isoCode}/category/${obj}`} id="link-third">
                  <li key={idx}>{obj}</li>
                </Link>
              );
            })}
          </div>
        )}
      </div>
      <div className="middle">
        <div className="third-top">{secondLevelCategoryData.middle.name}</div>
        <div className="third-mid">
          {sortedDesigners.map((obj, idx) => {
            return (
              <Link to={`/${lang.isoCode}/brand/${obj}`} id="link-third">
                <li key={idx}>{obj}</li>
              </Link>
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
            <Link to={`/`} style={{ color: "black" }}>
              <p>{thirdLevelCategoryDataRight.text}</p>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
