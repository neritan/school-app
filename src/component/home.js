
import React from 'react'; 
import { Button } from 'primereact/button';
import { useTranslation } from "react-i18next";

export default function Home() {
    const { t } = useTranslation();
    return (
         
     <> 
     <div className="card flex flex-wrap flex-column align-content-center  gap-3">
        <p>{t('about.1')} </p>
        <p>{t('about.2')}  </p>
       
            <Button label={t("student")} className="p-button-info p-button-raised" />
               
        
            <Button label={t("teacher")} className="p-button-info p-button-raised" />
    
            <Button label={t("parent")} className="p-button-info p-button-raised" />
            
    
        
        <p>{t('about.3')}  </p>
        <p>{t('about.4')}  </p>
        </div>
        </>  
    )
}