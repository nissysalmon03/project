import React, { useState, useEffect } from 'react';

const ReportGeneration = () => {
    const [reports, setReports] = useState([]);
    const [reportParams, setReportParams] = useState({ startDate: '', endDate: '' });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        fetchReports();
    }, []);

    const fetchReports = async () => {
        setLoading(true);
        setError('');
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            if (!response.ok) {
                throw new Error('Failed to fetch reports');
            }
            const data = await response.json();
            setReports(data);
        } catch (error) {
            setError('Error fetching reports. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    const generateReport = async () => {
        if (!reportParams.startDate || !reportParams.endDate) {
            setError('Please select both start and end dates.');
            return;
        }

        setLoading(true);
        setError('');
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(reportParams),
            });
            if (!response.ok) {
                throw new Error('Failed to generate report');
            }
            const data = await response.json();
            setReports([...reports, data]);
            setReportParams({ startDate: '', endDate: '' });
        } catch (error) {
            setError('Error generating report. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h1>Report Generation</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <div>
                <label>Start Date:</label>
                <input
                    type="date"
                    value={reportParams.startDate}
                    onChange={(e) => setReportParams({ ...reportParams, startDate: e.target.value })}
                />
            </div>
            <div>
                <label>End Date:</label>
                <input
                    type="date"
                    value={reportParams.endDate}
                    onChange={(e) => setReportParams({ ...reportParams, endDate: e.target.value })}
                />
            </div>
            <button onClick={generateReport} disabled={loading}>
                {loading ? 'Generating...' : 'Generate Report'}
            </button>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Body</th>
                        </tr>
                    </thead>
                    <tbody>
                        {reports.map((report) => (
                            <tr key={report.id}>
                                <td>{report.id}</td>
                                <td>{report.title}</td>
                                <td>{report.body}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default ReportGeneration;
