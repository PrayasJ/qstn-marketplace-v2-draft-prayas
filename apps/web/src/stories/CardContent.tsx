export const Reward = ({ type, className }: any) => {
  return (
    <div className={`reward ${className}`}>
      <img
        className="ellipse"
        alt="Ellipse"
        src={type === 'nft' ? 'rectangle-8.png' : 'ellipse-793.png'}
      />
      <div className="element-AVAX">
        {type === 'token' && <>1.15 AVAX</>}

        {type === 'nft' && <>NFT</>}
      </div>
    </div>
  );
};

export const CardContent = () => (
  <div className="frame">
    <div className="div">
      <div className="text-wrapper">Reward</div>
      <Reward
        className="reward-instance"
        divClassName="reward-2"
        ellipse="ellipse-793.svg"
        ellipseClassName="design-component-instance-node"
        text="0.001 ETH"
        type="token"
      />
    </div>
    <div className="div-2">
      <div className="text-wrapper">Blockchain</div>
      <Reward
        className="reward-instance"
        divClassName="reward-2"
        hasEllipse={false}
        text="Ethereum"
        type="token"
      />
    </div>
    <div className="div-2">
      <div className="text-wrapper">Time to complete</div>
      <Reward
        className="reward-instance"
        divClassName="reward-2"
        hasEllipse={false}
        text="10-15 min"
        type="token"
      />
    </div>
  </div>
);
