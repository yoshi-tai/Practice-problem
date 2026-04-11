# プロジェクトのビルドとデプロイ (XHTML + Servlet)

このリポジトリは `WebContent` を Web アプリのルート、`src/main/java` を Java ソースとして使う構成です。

前提:
- Java (11 以上) がインストールされていること
- Maven がインストールされていること（`mvn -v` で確認）
- Tomcat 10.x など Jakarta Servlet API (jakarta.*) を使うコンテナを想定

簡単な手順 (PowerShell):

1. ビルド
```powershell
cd C:\vscode作成
mvn -e -DskipTests package
```

2. 生成された WAR を Tomcat に配置
 - `target/vscode-app-1.0-SNAPSHOT.war` を Tomcat の `webapps` にコピーして Tomcat を起動/再起動

3. ブラウザで確認
 - `http://localhost:8080/<context>/sample.xhtml`（`<context>` は WAR 名または展開先のコンテキスト）

注意:
- Tomcat 9 以前を使っている場合は `javax.servlet.*` ベースの環境が必要です。現状は `jakarta.servlet` を利用しています。
- IDE（Eclipse, IntelliJ）を使うとデプロイが簡単です。Eclipse ならプロジェクトを Dynamic Web Project にして Tomcat に Run してください。

もし手元で動かなければ、エラーメッセージか使っている Tomcat バージョンを教えてください。
# My First Repo
はじめてのgithubアップロードします！
