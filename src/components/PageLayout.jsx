export default function PageLayout({children}){
    return(
        <div>
            <Sidebar />
            <main>
                {children}
                <Footer/>
            </main>
        </div>
    )
}

function Header(){
    return(
        <header>
            <nav></nav>
        </header>
    )
}

function Sidebar(){
    return(
        <aside>
            <header>
                <h1>Logo</h1>
            </header>
            <nav></nav>
            <footer></footer>
        </aside>
    )
}

function Footer(){
    
}