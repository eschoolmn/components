# eSchool platform

eSchool website UI Components.

## 📦 Installation

```sh
npm install @eschool/components
```

## 🚀 Usage

```jsx
import React from "react";
import { Tree } from "@eschool/components";
import "@eschool/components/styles/global.css"; // CSS file

const treeData = [
  {
    title: "Root",
    key: "0",
    children: [
      { title: "Child 1", key: "0-0" },
      { title: "Child 2", key: "0-1" },
    ],
  },
];

const App = () => {
  return <Tree treeData={treeData} />;
};

export default App;
```

## 🔧 Compatibility

- This project works with **React version 18.2.0**.

## ⌨️ Development

Git Clone
```sh
git clone https://github.com/eschoolmn/components.git
```

🏗Build
```sh
npm run build
```

✨Version update
```sh
npm version patch  # Small fixes
npm version minor  # New features
npm version major  # Breaking changes
```

🌍Publish Public
```sh
npm publish --access public
```


## 📜 License

Distributed under the MIT License.
