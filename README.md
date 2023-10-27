# Reactochime

A brief description of what this project does and who it's for

## Tech Stack

- ReactJs
- Javascript
- Firebase
- TailwindCss

## Folder Structure

- Components
- Layouts
- Pages
- State
  - Reducers
  - Contexts

## Folder Structure description

- Components:
  This is where all custom components are been creataed and stored, hence good practice, use descriptive names to store your component. all component are been created with the .js extension and not .jsx, hence they should also be inside folders wih descriptive naming convention.

- Layouts:
  This folder includes components that repeat across all routes/pages/screens

- Pages:
  This folder includes all the components that serves as route, imagine this is as the pages folder following the Next.js page folder structure.

- State:
  This folder contains the global state of the app, hwnce single source of truth. it is splitted across two folders, with the name context and reducers,
  - Context: hence all state created with the context api goes into this folder.
  - Reducers: the reducers connected to the required state goes into the reducers folder.

## Tailwind Config

Below is a description of the

- Theme Object: This should include all default styling, across the app, eg: font family, colors, etc.

```bash
  theme: {
    extend: {},
  },
```

- Plugins: This includes all external plugins. to refine and make using tailwindcss easier.

## 🔗 Links

[![Tailwind-Elements](https://img.shields.io/badge/tailwind_elements-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://tailwind-elements.com/quick-start/)

```bash
  plugins: [
    require('tw-elements/dist/plugin')
  ],
```

## Code GuideLines and Conventions

- Use the commenting convention on all functions delcared, and HTML tags delcared, comments should be descriptive.

### HTML Commenting Syntax Guide

```bash
  {/* start profile image and notification */}
    <div className="flex items-center">
        {/* start notificaton icon */}
        <div className="mr-6"></div>
        {/* end notificaton icon */}

        {/* start profile image */}
        <div></div>
        {/* end profile image */}
    </div>
  {/* end profile image and notification */}
```

### JAVASCRIPT Commenting Syntax Guide

```bash
  // Header context state for the header
    const { pageTitle } = useContext(HeaderContext)
    // dashboard page title state
    const [ dashboardPageTitle, setdashboardPageTitle ] = useState(true)

    // observe the pageTitle state for the dashboard
    useEffect(() => {
        if(pageTitle === 'Welcome Onboard') {
            console.log('dashboard')
            setdashboardPageTitle(true)
        } else {
            setdashboardPageTitle(false)
        }
    },[pageTitle])
```
