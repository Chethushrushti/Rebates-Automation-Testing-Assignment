describe('Rakuten Rebates 検索機能テスト', () => {
    
    it('ユーザーが正常にログインし、有効な検索を実行できることを確認する', () => {
      // Rakuten Rebatesのホームページにアクセス
      cy.visit('https://www.rebates.jp/');
      
      // ポップアップウィンドウを閉じる
      cy.get('#content > div.css-615sn1.e15o6ims1 > button').click(); 
      
      // 検索バーに「Nike」を入力
      cy.get('#searchInput').type('Nike');  
      
      // 検索ボタンをクリック
      cy.get('#searchButton').click();   
      
      // 検索結果が表示され、「ストア一覧」が含まれていることを確認
      cy.get('#content > div.css-1a9be8r > div > div.css-1ftn6pc.e9svc300 > div.css-4zmbdu.e9svc305 > div:nth-child(2) > div')
        .should('be.visible') // 結果のコンテナが表示されていることを確認
        .should('contain', 'ストア一覧'); // 「ストア一覧」というテキストが含まれていることを確認
    });
    
    it('検索できない製品に対して「該当する結果が見つかりませんでした」のメッセージが表示されることを確認する', () => {
      // Rakuten Rebatesのホームページにアクセス
      cy.visit('https://www.rebates.jp/');
      
      // ポップアップウィンドウを閉じる
      cy.get('#content > div.css-615sn1.e15o6ims1 > button').click(); 
      
      // 検索バーに（myntra）を入力（存在しない製品）
      cy.get('#searchInput').type('myntra');  
      
      // 検索ボタンをクリック
      cy.get('#searchButton').click();   
      
      // 「該当する結果が見つかりませんでした」のメッセージが表示されていることを確認
      cy.contains('「myntra」に一致するストア、商品は見つかりませんでした。').should('be.visible');
    });
});