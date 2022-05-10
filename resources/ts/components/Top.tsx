import React from 'react';

const Top: React.FC = () => {
  return (
    <div className='Index'>
      <div className='IndexContainer'>
        <h1>「2setMatch」へようこそ！</h1>
        <div className='IndexText'>
          このアプリは以下の手順で必要事項を入力するだけで、勝ち点・得失点差が分かるアプリです。
        </div>
        <ol>
          <li>①　総合順位を計算したいリーグや部門の計算シートを作成</li>
          <li>　　　　　↓</li>
          <li>②　作成した計算シートに参加するチームを登録</li>
          <li>　　　　　↓</li>
          <li>③　勝った場合と各種引き分けの場合の勝ち点を入力</li>
          <li>　　　　　↓</li>
          <li>④　試合の結果をもとに対戦表を作って点数を登録</li>
        </ol>
        <div className='IndexText'>
          以上の作業だけで、２セットマッチの勝ち点・得失点差が自動で計算されます。
        </div>
        <div className='IndexCheck'>
          ※※※より詳しい使い方を見たい場合は上の『About』から確認をお願いします※※※
        </div>
      </div>
    </div>
  );
};

export default Top;
