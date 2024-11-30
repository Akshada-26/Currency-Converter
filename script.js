function currencyConverter()
{

    const resultDiv = document.getElementById('result');
    const errorDiv = document.getElementById('error');

    const isConversionSuccessful = true;

    if(isConversionSuccessful)
    {
        resultDiv.textContent = "100 USD = 8,407.52 INR"; 
        resultDiv.classList.remove('hidden'); 
        errorDiv.classList.add('hidden');
    }
    else
    {
        resultDiv.classList.add('hidden');  
        errorDiv.textContent = "An error occurred, please try again later";
        errorDiv.classList.remove('hidden');
    }
}
