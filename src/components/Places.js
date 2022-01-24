import React from 'react';
import './Places.css'
import Card from './Card'

function Places() {
    return (
        <>
            <div id = "places" className = 'place'>
                <h2 className = 'text-center'>Places you should visit in Georgia</h2>
                <div className = 'rows'>
                    <Card src = 'lake-abkhazia-mountains-nature.jpg'
                        label = 'Apkhazeti'
                        alt = 'Apkhazeti - ritsa lake'
                        area = '-Ritsa Lake'/>
                    <Card src = 'falls-georgia-park-mtirala-adjara-wallpaper-preview.jpg'
                        label = 'Adjara'
                        alt = 'Adjara - mtirala National Park'
                        area = '-Mtirala National Park'/>
                    <Card src = 'katskhi.jpg'
                        label = 'Imereti'
                        alt = 'Imereti - katskhi pillar'
                        area = '-katskhi pillar'/>
                    <Card src = 'Uplistsikhe_view.jpg'
                        label = 'Shida kartli'
                        alt = 'Shida kartli - Uplistsikhe'
                        area = '-Uplistsikhe'/>
                    <Card src = 'samegrelo_martvili.jpg'
                        label = 'Samegrelo'
                        alt = 'samegrelo - Martvili Canyon'
                        area = '-Martvili Canyon'/>
                    <Card src = 'svaneti_ushguli.jpg'
                        label = 'Svaneti'
                        alt = 'Svaneti - Ushguli'
                        area = '-Ushguli'/>  
                    <Card src = 'davit-gareji.jpg'
                        label = 'Kakheti'
                        alt = 'Kakheti - David Gareja'
                        area = '-David Gareja'/>
                    <Card src = 'Akhalcikhe,_old_city_general_view.jpg'
                        label = 'Samtskhe–Javakheti'
                        alt = 'Samtskhe–Javakheti - Rabati Castle'
                        area = '-Rabati Castle'/>
                    <Card src = 'Guria,_Region_in_Georgia.jpg'
                        label = 'Guria'
                        alt = 'Guria - Baxmaro'
                        area = '-Baxmaro'/> 
                    <Card src = 'mtskheta.jpg'
                        label = 'Mtskheta-Mtianeti'
                        alt = 'KMtskheta-Mtianeti - svetitskhoveli'
                        area = '-Svetitskhoveli'/>
                    <Card src = 'lake-of-love.jpg'
                        label = 'Racha-Lechkhumi'
                        alt = 'Racha-Lechkhumi - Lake of love'
                        area = '-Lake of love'/>
                </div> 
            </div>
        </>
    )
}

export default Places
