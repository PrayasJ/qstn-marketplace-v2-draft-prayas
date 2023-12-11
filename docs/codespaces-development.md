1. Create a codespaces instance with 8GB of memory.
2. Copy the `.env.local` file to the project directory.
3. Open a terminal and type the following command:

```
pnpm install
```

This will install the dependencies for the project.

4. After the installation is complete, type the following command in the same terminal:

```
pnpm dev
```

This will start the development server.

5. Open a second terminal.
    
6. In the second terminal, type the following command:
    

```
cd apps/web
```

This will change the directory to the `apps/web` directory.

7. In the `apps/web` directory, type the following command:

```
pnpm watch:tailwind
```

This will start the Tailwind CSS watch command.

8. Open a web browser and navigate to `http://localhost:3000`.

This will open the development server in your web browser.

Here are some additional details that should be considered when following these instructions:

- The `.env.local` file contains environment variables that are used by the project. These variables should be set according to your environment.
- The `pnpm dev` command starts the development server and watches for changes to the code. This means that the server will automatically restart if you make any changes to the code.
- The `pnpm watch:tailwind` command starts the Tailwind CSS watch command. This command will automatically rebuild the Tailwind CSS styles whenever you make changes to the Tailwind CSS configuration file.