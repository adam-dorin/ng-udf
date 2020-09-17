### How to start a new library


1. Generate new app:
`` ng new <app-name> ``
2. Generate new library:
`` ng new library <lib-name> ``
3. Build the lib:
`` ng build <lib-name> ``
4. Create links:
```bash
cd dist/<lib-name>
npm link
cd ../../
npm link
```
5. Run:
```bash
npm start
ng build <lib-name> --watch
```
