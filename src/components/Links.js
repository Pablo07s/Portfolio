import React from 'react';

export const Links = () => {
    return (
        <>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="a">About <span class="sr-only"></span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#goProjects">Projects</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#goContact">Contact</a>
                    </li>
                </ul>
            </div>
        </>
    )
}
